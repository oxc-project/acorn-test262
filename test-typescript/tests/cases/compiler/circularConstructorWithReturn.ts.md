__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 125,
  "end": 528,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 125,
      "end": 218,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 132,
        "end": 218,
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 143,
          "name": "Client",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 146,
          "end": 218,
          "checkType": {
            "type": "TSTypeReference",
            "start": 146,
            "end": 180,
            "typeName": {
              "type": "Identifier",
              "start": 146,
              "end": 156,
              "name": "ReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 156,
              "end": 180,
              "params": [
                {
                  "type": "TSTypeQuery",
                  "start": 157,
                  "end": 179,
                  "exprName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 179,
                    "name": "getPrismaClient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSConstructorType",
            "start": 189,
            "end": 206,
            "abstract": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 206,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 199,
                "end": 206,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 205,
                  "end": 206,
                  "name": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "name": "T",
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
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 209,
            "end": 210,
            "typeName": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 213,
            "end": 218
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 220,
      "end": 442,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 227,
        "end": 442,
        "id": {
          "type": "Identifier",
          "start": 236,
          "end": 251,
          "name": "getPrismaClient",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 252,
            "end": 265,
            "name": "options",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 265,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 262,
                "end": 265
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 267,
          "end": 442,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 271,
              "end": 417,
              "id": {
                "type": "Identifier",
                "start": 277,
                "end": 289,
                "name": "PrismaClient",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 290,
                "end": 417,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 296,
                    "end": 309,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 300,
                      "name": "self",
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
                      "start": 300,
                      "end": 308,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 302,
                        "end": 308,
                        "typeName": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 308,
                          "name": "Client",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 314,
                    "end": 413,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 325,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 325,
                      "end": 413,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 326,
                          "end": 339,
                          "name": "options",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 334,
                            "end": 339,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 336,
                              "end": 339
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 341,
                        "end": 413,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 349,
                            "end": 407,
                            "argument": {
                              "type": "AssignmentExpression",
                              "start": 357,
                              "end": 405,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 357,
                                "end": 366,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 357,
                                  "end": 361
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 362,
                                  "end": 366,
                                  "name": "self",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 369,
                                "end": 405,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 369,
                                  "end": 399,
                                  "name": "applyModelsAndClientExtensions",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 400,
                                    "end": 404
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
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
            },
            {
              "type": "ReturnStatement",
              "start": 421,
              "end": 440,
              "argument": {
                "type": "Identifier",
                "start": 428,
                "end": 440,
                "name": "PrismaClient",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 444,
      "end": 527,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 451,
        "end": 527,
        "id": {
          "type": "Identifier",
          "start": 460,
          "end": 490,
          "name": "applyModelsAndClientExtensions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 491,
            "end": 505,
            "name": "client",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 505,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 499,
                "end": 505,
                "typeName": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 505,
                  "name": "Client",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          "start": 507,
          "end": 527,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 511,
              "end": 525,
              "argument": {
                "type": "Identifier",
                "start": 518,
                "end": 524,
                "name": "client",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
