__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 144,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 144,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 101,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 101,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 101,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 95,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
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
                      "start": 55,
                      "end": 95,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 92,
                        "end": 95,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 56,
                          "end": 72,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 72,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 72,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 74,
                          "end": 90,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 90,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 82,
                              "end": 90,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
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
                "start": 28,
                "end": 33,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 142,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 113,
              "end": 142,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 117,
                  "end": 141,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 123,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 126,
                    "end": 141,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 136,
                        "end": 137,
                        "raw": "0",
                        "value": 0
                      },
                      {
                        "type": "Literal",
                        "start": 139,
                        "end": 140,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 135,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 170,
      "end": 249,
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 249,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 186,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 274,
      "end": 422,
      "body": {
        "type": "TSModuleBlock",
        "start": 283,
        "end": 422,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 290,
            "end": 303,
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 356,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 371,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 371,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 363,
                      "end": 371,
                      "exprName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 377,
            "end": 392,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 391,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 391,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 382,
                    "end": 391,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 384,
                      "end": 391,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 384,
                        "end": 391,
                        "left": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 391,
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
          },
          {
            "type": "VariableDeclaration",
            "start": 397,
            "end": 420,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 401,
                "end": 419,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 405,
                  "end": 419,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 407,
                      "end": 411,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
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
                        "start": 410,
                        "end": 411,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 413,
                      "end": 417,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
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
                        "start": 416,
                        "end": 417,
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
        "start": 281,
        "end": 282,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
