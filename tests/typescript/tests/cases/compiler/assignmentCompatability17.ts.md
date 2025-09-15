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
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 250
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
                          "name": "two",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 254,
                          "end": 257
                        },
                        "value": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 260,
                              "end": 263
                            },
                            "start": 260,
                            "end": 265
                          },
                          "expression": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 267,
                                "end": 268
                              }
                            ],
                            "start": 266,
                            "end": 269
                          },
                          "start": 259,
                          "end": 269
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 254,
                        "end": 269
                      }
                    ],
                    "start": 253,
                    "end": 270
                  },
                  "definite": false,
                  "start": 247,
                  "end": 270
                }
              ],
              "declare": false,
              "start": 243,
              "end": 271
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 236,
            "end": 271
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
                    "start": 287,
                    "end": 297
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 303
                  },
                  "definite": false,
                  "start": 287,
                  "end": 303
                }
              ],
              "declare": false,
              "start": 283,
              "end": 304
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 276,
            "end": 304
          }
        ],
        "start": 230,
        "end": 306
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 306
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
            "start": 307,
            "end": 316
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 327
          },
          "optional": false,
          "computed": false,
          "start": 307,
          "end": 327
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 351
          },
          "optional": false,
          "computed": false,
          "start": 330,
          "end": 351
        },
        "start": 307,
        "end": 351
      },
      "directive": null,
      "start": 307,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 351
}
```
