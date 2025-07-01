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
        "start": 7,
        "end": 16
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
                "start": 40,
                "end": 70
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
                      "start": 71,
                      "end": 72
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 71,
                    "end": 72
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 73,
                    "end": 74
                  }
                ],
                "start": 70,
                "end": 75
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
                      "start": 78,
                      "end": 81
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
                          "start": 83,
                          "end": 84
                        },
                        "typeArguments": null,
                        "start": 83,
                        "end": 84
                      },
                      "start": 81,
                      "end": 84
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 78,
                    "end": 85
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
                      "start": 86,
                      "end": 89
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
                          "start": 92,
                          "end": 93
                        },
                        "typeArguments": null,
                        "start": 92,
                        "end": 93
                      },
                      "start": 90,
                      "end": 93
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 86,
                    "end": 94
                  }
                ],
                "start": 76,
                "end": 96
              },
              "declare": false,
              "start": 30,
              "end": 96
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 96
          },
          {
            "type": "EmptyStatement",
            "start": 96,
            "end": 97
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
                        "start": 109,
                        "end": 139
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 140,
                            "end": 146
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        ],
                        "start": 139,
                        "end": 154
                      },
                      "start": 109,
                      "end": 154
                    },
                    "start": 107,
                    "end": 154
                  },
                  "start": 103,
                  "end": 154
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
                        "start": 159,
                        "end": 162
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 164,
                        "end": 165
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 159,
                      "end": 165
                    }
                  ],
                  "start": 157,
                  "end": 167
                },
                "definite": false,
                "start": 103,
                "end": 167
              }
            ],
            "declare": false,
            "start": 99,
            "end": 168
          },
          {
            "type": "EmptyStatement",
            "start": 168,
            "end": 169
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
                    "start": 185,
                    "end": 196
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 203
                  },
                  "definite": false,
                  "start": 185,
                  "end": 203
                }
              ],
              "declare": false,
              "start": 181,
              "end": 204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 174,
            "end": 204
          }
        ],
        "start": 17,
        "end": 206
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 206
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__test2__",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 223
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
                    "start": 241,
                    "end": 244
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
                          "start": 248,
                          "end": 251
                        },
                        "value": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 254,
                              "end": 257
                            },
                            "start": 254,
                            "end": 259
                          },
                          "expression": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 261,
                                "end": 262
                              }
                            ],
                            "start": 260,
                            "end": 263
                          },
                          "start": 253,
                          "end": 263
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 248,
                        "end": 263
                      }
                    ],
                    "start": 247,
                    "end": 264
                  },
                  "definite": false,
                  "start": 241,
                  "end": 264
                }
              ],
              "declare": false,
              "start": 237,
              "end": 265
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 230,
            "end": 265
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
                    "start": 281,
                    "end": 291
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 297
                  },
                  "definite": false,
                  "start": 281,
                  "end": 297
                }
              ],
              "declare": false,
              "start": 277,
              "end": 298
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 270,
            "end": 298
          }
        ],
        "start": 224,
        "end": 300
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 207,
      "end": 300
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
            "start": 301,
            "end": 310
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 321
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 321
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 333
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 345
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 345
        },
        "start": 301,
        "end": 345
      },
      "directive": null,
      "start": 301,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 345
}
```
