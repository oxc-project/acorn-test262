__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 593,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 125,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 125,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "BuildError",
          "optional": false,
          "typeAnnotation": null
        },
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
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
              "start": 30,
              "end": 31,
              "name": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
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
          "start": 32,
          "end": 125,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 36,
              "end": 123,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "decorators": [],
                "name": "parent",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 123,
                "id": null,
                "generator": false,
                "async": false,
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
                      "start": 53,
                      "end": 64,
                      "name": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 64,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
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
                      "decorators": [],
                      "name": "FileWithErrors",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
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
                        "decorators": [],
                        "name": "undefined",
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
      "start": 126,
      "end": 340,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 133,
        "end": 340,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 139,
          "end": 153,
          "decorators": [],
          "name": "FileWithErrors",
          "optional": false,
          "typeAnnotation": null
        },
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
              "start": 157,
              "end": 158,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
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
              "start": 160,
              "end": 161,
              "name": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
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
          "start": 162,
          "end": 340,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 166,
              "end": 251,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 179,
                "end": 251,
                "id": null,
                "generator": false,
                "async": false,
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
                      "start": 183,
                      "end": 194,
                      "name": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 193,
                        "end": 194,
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
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
                        "decorators": [],
                        "name": "BuildError",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
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
                        "decorators": [],
                        "name": "undefined",
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
              "start": 254,
              "end": 338,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 267,
                "decorators": [],
                "name": "parent",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 267,
                "end": 338,
                "id": null,
                "generator": false,
                "async": false,
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
                      "start": 271,
                      "end": 282,
                      "name": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 281,
                        "end": 282,
                        "typeName": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 282,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
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
                      "decorators": [],
                      "name": "BuildResult",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
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
                        "decorators": [],
                        "name": "undefined",
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
      "start": 341,
      "end": 593,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 348,
        "end": 593,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 354,
          "end": 365,
          "decorators": [],
          "name": "BuildResult",
          "optional": false,
          "typeAnnotation": null
        },
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
              "start": 369,
              "end": 370,
              "name": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
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
              "start": 372,
              "end": 373,
              "name": {
                "type": "Identifier",
                "start": 372,
                "end": 373,
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
          "start": 374,
          "end": 593,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 378,
              "end": 591,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 390,
                "decorators": [],
                "name": "merge",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 390,
                "end": 591,
                "id": null,
                "generator": false,
                "async": false,
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
                      "start": 394,
                      "end": 405,
                      "name": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 404,
                        "end": 405,
                        "typeName": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 405,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 410,
                    "end": 437,
                    "decorators": [],
                    "name": "other",
                    "optional": false,
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
                          "decorators": [],
                          "name": "BuildResult",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
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
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
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
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 438,
                  "end": 444,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 440,
                    "end": 444
                  }
                },
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
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 453,
                                      "end": 454,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 455,
                                    "end": 456,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 457,
                                  "end": 458,
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 460,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 461,
                              "end": 462,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 464,
                            "decorators": [],
                            "name": "g",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                            "decorators": [],
                            "name": "removedFiles",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 494,
                            "decorators": [],
                            "name": "forEach",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 495,
                            "end": 585,
                            "expression": false,
                            "async": false,
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
                                  "start": 499,
                                  "end": 510,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 499,
                                    "end": 500,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 509,
                                    "end": 510,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 509,
                                      "end": 510,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                "start": 515,
                                "end": 544,
                                "decorators": [],
                                "name": "each",
                                "optional": false,
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
                                      "decorators": [],
                                      "name": "FileWithErrors",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
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
                                        "decorators": [],
                                        "name": "removeFile",
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
                                        "start": 573,
                                        "end": 577,
                                        "decorators": [],
                                        "name": "each",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
