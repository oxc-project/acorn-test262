__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__test1__",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceWithPublicAndOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 73
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 75
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 74,
                    "end": 75
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 73,
                "end": 78
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 84
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 87
                      },
                      "start": 84,
                      "end": 87
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 81,
                    "end": 88
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 92
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 96
                      },
                      "start": 93,
                      "end": 96
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 89,
                    "end": 97
                  }
                ],
                "start": 79,
                "end": 99
              },
              "declare": false,
              "start": 33,
              "end": 99
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 26,
            "end": 99
          },
          {
            "type": "EmptyStatement",
            "start": 99,
            "end": 100
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceWithPublicAndOptional",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 142
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 143,
                            "end": 149
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          }
                        ],
                        "start": 142,
                        "end": 157
                      },
                      "start": 112,
                      "end": 157
                    },
                    "start": 110,
                    "end": 157
                  },
                  "start": 106,
                  "end": 157
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "one",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 165
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 167,
                        "end": 168
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 162,
                      "end": 168
                    }
                  ],
                  "start": 160,
                  "end": 170
                },
                "definite": false,
                "start": 106,
                "end": 170
              }
            ],
            "declare": false,
            "start": 102,
            "end": 171
          },
          {
            "type": "EmptyStatement",
            "start": 171,
            "end": 172
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__val__obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 199
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 206
                  },
                  "definite": false,
                  "start": 188,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 184,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 177,
            "end": 207
          }
        ],
        "start": 20,
        "end": 209
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 209
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__test2__",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 229
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Tnumber",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 255,
                                    "end": 262
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 255,
                                  "end": 262
                                }
                              ],
                              "start": 254,
                              "end": 263
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Tnumber",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 266,
                                      "end": 273
                                    },
                                    "typeArguments": null,
                                    "start": 266,
                                    "end": 273
                                  },
                                  "start": 265,
                                  "end": 273
                                },
                                "start": 264,
                                "end": 273
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tnumber",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 275,
                                  "end": 282
                                },
                                "typeArguments": null,
                                "start": 275,
                                "end": 282
                              },
                              "start": 274,
                              "end": 282
                            },
                            "start": 254,
                            "end": 283
                          }
                        ],
                        "start": 252,
                        "end": 284
                      },
                      "start": 250,
                      "end": 284
                    },
                    "start": 247,
                    "end": 284
                  },
                  "init": null,
                  "definite": false,
                  "start": 247,
                  "end": 284
                }
              ],
              "declare": false,
              "start": 243,
              "end": 285
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 236,
            "end": 285
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__val__obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 311
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 317
                  },
                  "definite": false,
                  "start": 301,
                  "end": 317
                }
              ],
              "declare": false,
              "start": 297,
              "end": 318
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 290,
            "end": 318
          }
        ],
        "start": 230,
        "end": 320
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test2__",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 330
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 341
          },
          "optional": false,
          "computed": false,
          "start": 321,
          "end": 341
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 353
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 365
          },
          "optional": false,
          "computed": false,
          "start": 344,
          "end": 365
        },
        "start": 321,
        "end": 365
      },
      "directive": null,
      "start": 321,
      "end": 365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
}
```
