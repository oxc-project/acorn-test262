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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "classWithOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 275
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
                      "start": 276,
                      "end": 277
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 276,
                    "end": 277
                  }
                ],
                "start": 275,
                "end": 278
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 292
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": true,
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
                                  "start": 306,
                                  "end": 307
                                },
                                "typeArguments": null,
                                "start": 306,
                                "end": 307
                              },
                              "start": 304,
                              "end": 307
                            },
                            "start": 300,
                            "end": 307
                          },
                          "readonly": false,
                          "static": false,
                          "start": 293,
                          "end": 307
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 309,
                        "end": 311
                      },
                      "expression": false,
                      "start": 292,
                      "end": 311
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 281,
                    "end": 311
                  }
                ],
                "start": 279,
                "end": 313
              },
              "abstract": false,
              "declare": false,
              "start": 252,
              "end": 313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 236,
            "end": 313
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "classWithOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 366
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 367,
                        "end": 373
                      }
                    ],
                    "start": 366,
                    "end": 374
                  },
                  "arguments": [],
                  "start": 345,
                  "end": 376
                },
                "definite": false,
                "start": 340,
                "end": 376
              }
            ],
            "declare": false,
            "start": 336,
            "end": 377
          },
          {
            "type": "EmptyStatement",
            "start": 377,
            "end": 378
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
                    "name": "__val__x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 403
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 408
                  },
                  "definite": false,
                  "start": 394,
                  "end": 408
                }
              ],
              "declare": false,
              "start": 390,
              "end": 409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 383,
            "end": 409
          }
        ],
        "start": 230,
        "end": 411
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 411
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
            "start": 412,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 431
          },
          "optional": false,
          "computed": false,
          "start": 412,
          "end": 431
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 443
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 455
          },
          "optional": false,
          "computed": false,
          "start": 434,
          "end": 455
        },
        "start": 412,
        "end": 455
      },
      "directive": null,
      "start": 412,
      "end": 455
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 455
}
```
