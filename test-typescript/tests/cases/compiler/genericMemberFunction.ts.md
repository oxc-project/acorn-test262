__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 594,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 125,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 125,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "name": "BuildError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 32,
          "end": 125,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 36,
              "end": 123,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "name": "parent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 123,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 96,
                  "end": 123,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 102,
                      "end": 119,
                      "argument": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 118,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 49,
                  "end": 68,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 50,
                      "end": 51,
                      "name": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                      "end": 64,
                      "name": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 64,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 66,
                      "end": 67,
                      "name": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 86,
                      "name": "FileWithErrors",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 86,
                      "end": 95,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 87,
                          "end": 88,
                          "typeName": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 90,
                          "end": 91,
                          "typeName": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 91,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 93,
                          "end": 94,
                          "typeName": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 32,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 25,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 30,
              "end": 31,
              "name": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 340,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 133,
        "end": 340,
        "id": {
          "type": "Identifier",
          "start": 139,
          "end": 153,
          "name": "FileWithErrors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 162,
          "end": 340,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 166,
              "end": 251,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "name": "errors",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 179,
                "end": 251,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 224,
                  "end": 251,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 230,
                      "end": 247,
                      "argument": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 246,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 179,
                  "end": 198,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 180,
                      "end": 181,
                      "name": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 183,
                      "end": 194,
                      "name": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 193,
                        "end": 194,
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 196,
                      "end": 197,
                      "name": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 200,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 202,
                    "end": 223,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 202,
                      "end": 221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 212,
                        "name": "BuildError",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 212,
                        "end": 221,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 213,
                            "end": 214,
                            "typeName": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 216,
                            "end": 217,
                            "typeName": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 217,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 219,
                            "end": 220,
                            "typeName": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 220,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 254,
              "end": 338,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 267,
                "name": "parent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 267,
                "end": 338,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 311,
                  "end": 338,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 317,
                      "end": 334,
                      "argument": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 333,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 267,
                  "end": 286,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 268,
                      "end": 269,
                      "name": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 271,
                      "end": 282,
                      "name": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 281,
                        "end": 282,
                        "typeName": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 282,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 284,
                      "end": 285,
                      "name": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 288,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 290,
                    "end": 310,
                    "typeName": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 301,
                      "name": "BuildResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 301,
                      "end": 310,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 302,
                          "end": 303,
                          "typeName": {
                            "type": "Identifier",
                            "start": 302,
                            "end": 303,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 305,
                          "end": 306,
                          "typeName": {
                            "type": "Identifier",
                            "start": 305,
                            "end": 306,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 308,
                          "end": 309,
                          "typeName": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 309,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 153,
          "end": 162,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 154,
              "end": 155,
              "name": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 157,
              "end": 158,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 160,
              "end": 161,
              "name": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 341,
      "end": 593,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 348,
        "end": 593,
        "id": {
          "type": "Identifier",
          "start": 354,
          "end": 365,
          "name": "BuildResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 374,
          "end": 593,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 378,
              "end": 591,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 390,
                "name": "merge",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 390,
                "end": 591,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 410,
                    "end": 437,
                    "name": "other",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 415,
                      "end": 437,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 417,
                        "end": 437,
                        "typeName": {
                          "type": "Identifier",
                          "start": 417,
                          "end": 428,
                          "name": "BuildResult",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 428,
                          "end": 437,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 429,
                              "end": 430,
                              "typeName": {
                                "type": "Identifier",
                                "start": 429,
                                "end": 430,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 432,
                              "end": 433,
                              "typeName": {
                                "type": "Identifier",
                                "start": 432,
                                "end": 433,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 435,
                              "end": 436,
                              "typeName": {
                                "type": "Identifier",
                                "start": 435,
                                "end": 436,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 445,
                  "end": 591,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 451,
                      "end": 469,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 451,
                        "end": 468,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 451,
                          "end": 464,
                          "object": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 462,
                            "object": {
                              "type": "MemberExpression",
                              "start": 451,
                              "end": 460,
                              "object": {
                                "type": "MemberExpression",
                                "start": 451,
                                "end": 458,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 451,
                                  "end": 456,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 451,
                                    "end": 454,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 451,
                                      "end": 452,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 453,
                                      "end": 454,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 455,
                                    "end": 456,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 457,
                                  "end": 458,
                                  "name": "d",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 460,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 461,
                              "end": 462,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 464,
                            "name": "g",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 467,
                          "end": 468,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 474,
                      "end": 587,
                      "expression": {
                        "type": "CallExpression",
                        "start": 474,
                        "end": 586,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 474,
                          "end": 494,
                          "object": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 486,
                            "name": "removedFiles",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 494,
                            "name": "forEach",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 495,
                            "end": 585,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 515,
                                "end": 544,
                                "name": "each",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 519,
                                  "end": 544,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 521,
                                    "end": 544,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 521,
                                      "end": 535,
                                      "name": "FileWithErrors",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 535,
                                      "end": 544,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 536,
                                          "end": 537,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 536,
                                            "end": 537,
                                            "name": "A",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "start": 539,
                                          "end": 540,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 539,
                                            "end": 540,
                                            "name": "B",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "start": 542,
                                          "end": 543,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 542,
                                            "end": 543,
                                            "name": "C",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 549,
                              "end": 585,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 557,
                                  "end": 579,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 557,
                                    "end": 578,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 557,
                                      "end": 572,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 557,
                                        "end": 561
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 562,
                                        "end": 572,
                                        "name": "removeFile",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 573,
                                        "end": 577,
                                        "name": "each",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 495,
                              "end": 514,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 496,
                                  "end": 497,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 496,
                                    "end": 497,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 499,
                                  "end": 510,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 499,
                                    "end": 500,
                                    "name": "B",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 509,
                                    "end": 510,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 509,
                                      "end": 510,
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 512,
                                  "end": 513,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 512,
                                    "end": 513,
                                    "name": "C",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 390,
                  "end": 409,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 391,
                      "end": 392,
                      "name": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 392,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 394,
                      "end": 405,
                      "name": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 404,
                        "end": 405,
                        "typeName": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 405,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 407,
                      "end": 408,
                      "name": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 438,
                  "end": 444,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 440,
                    "end": 444
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 365,
          "end": 374,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 366,
              "end": 367,
              "name": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 369,
              "end": 370,
              "name": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 372,
              "end": 373,
              "name": {
                "type": "Identifier",
                "start": 372,
                "end": 373,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
