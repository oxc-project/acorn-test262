__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 578,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 43,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 253,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 51,
        "end": 253,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 85,
          "end": 253,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 91,
              "end": 101,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 92,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 94,
                  "end": 100
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 106,
              "end": 251,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 117,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 117,
                "end": 251,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 129,
                  "end": 251,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 139,
                      "end": 147,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 139,
                        "end": 146,
                        "arguments": [],
                        "callee": {
                          "type": "Super",
                          "start": 139,
                          "end": 144
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 184,
                      "end": 195,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 184,
                        "end": 194,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 184,
                          "end": 190,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 184,
                            "end": 188
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 229,
                      "end": 245,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 233,
                          "end": 244,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 233,
                            "end": 237,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 234,
                              "end": 237,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 236,
                                "end": 237,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 236,
                                  "end": 237,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 240,
                            "end": 244,
                            "raw": "null",
                            "value": null,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 118,
                    "end": 127,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 121,
                        "end": 127
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 71,
          "end": 75,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 75,
          "end": 84,
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 76,
              "end": 83
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 269,
      "end": 282,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 279,
        "end": 282,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 278,
        "decorators": [],
        "name": "Leg",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 283,
      "end": 419,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 308,
        "end": 419,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 314,
            "end": 325,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "start": 318,
              "end": 325,
              "expression": {
                "type": "ObjectExpression",
                "start": 318,
                "end": 320,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 324,
                "end": 325,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 405,
            "end": 417,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 411,
              "end": 417,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 411,
                "end": 415
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 416,
                "end": 417,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 292,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 304,
        "end": 307,
        "decorators": [],
        "name": "Leg",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 292,
        "end": 295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 293,
            "end": 294,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 435,
      "end": 454,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 451,
        "end": 454,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 450,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 455,
      "end": 578,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 490,
        "end": 578,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 496,
            "end": 507,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 496,
              "end": 500,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 506,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 502,
                "end": 506,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 506,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 512,
            "end": 576,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 519,
              "decorators": [],
              "name": "getData",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 519,
              "end": 576,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 522,
                "end": 576,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 553,
                    "end": 570,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 560,
                      "end": 569,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 560,
                        "end": 564
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 569,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 465,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 480,
        "end": 489,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 465,
        "end": 471,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 466,
            "end": 470,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 466,
              "end": 470,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
