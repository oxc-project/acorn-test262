__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nake",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 8
        }
      ],
      "declare": false,
      "start": 0,
      "end": 9
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doCompile",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 28
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 31
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 35
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 39
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 39
          }
        ],
        "start": 28,
        "end": 40
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fileset",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 52
              },
              "typeArguments": null,
              "start": 50,
              "end": 52
            },
            "start": 48,
            "end": 52
          },
          "start": 41,
          "end": 52
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "moduleType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 68
              },
              "typeArguments": null,
              "start": 66,
              "end": 68
            },
            "start": 64,
            "end": 68
          },
          "start": 54,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 93
            },
            "start": 77,
            "end": 94
          }
        ],
        "start": 70,
        "end": 96
      },
      "expression": false,
      "start": 10,
      "end": 96
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
              "name": "compileServer",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 121
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "task",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 128
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 129,
                    "end": 135
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 137,
                    "end": 143
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 145,
                    "end": 148
                  }
                ],
                "start": 128,
                "end": 149
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 153
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 151,
                        "end": 153
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 157
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 155,
                        "end": 157
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 161
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 159,
                        "end": 161
                      }
                    ],
                    "start": 150,
                    "end": 162
                  },
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "folder",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 185
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 192
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 193,
                                  "end": 197
                                },
                                "optional": false,
                                "computed": false,
                                "start": 188,
                                "end": 197
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 188,
                              "end": 199
                            },
                            "definite": false,
                            "start": 179,
                            "end": 199
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileset",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 216
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nake",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 219,
                                  "end": 223
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileSetSync",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 224,
                                  "end": 235
                                },
                                "optional": false,
                                "computed": false,
                                "start": 219,
                                "end": 235
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 236,
                                    "end": 242
                                  },
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 244,
                                    "end": 250
                                  },
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 252,
                                    "end": 255
                                  }
                                ],
                                "start": 235,
                                "end": 256
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "folder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 257,
                                  "end": 263
                                }
                              ],
                              "optional": false,
                              "start": 219,
                              "end": 264
                            },
                            "definite": false,
                            "start": 209,
                            "end": 264
                          }
                        ],
                        "declare": false,
                        "start": 175,
                        "end": 264
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doCompile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 274,
                            "end": 283
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 284,
                                "end": 290
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 292,
                                "end": 298
                              },
                              {
                                "type": "TSAnyKeyword",
                                "start": 300,
                                "end": 303
                              }
                            ],
                            "start": 283,
                            "end": 304
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileset",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 305,
                              "end": 312
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "moduleType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 324
                            }
                          ],
                          "optional": false,
                          "start": 274,
                          "end": 325
                        },
                        "start": 267,
                        "end": 326
                      }
                    ],
                    "start": 168,
                    "end": 328
                  },
                  "id": null,
                  "generator": false,
                  "start": 150,
                  "end": 328
                }
              ],
              "optional": false,
              "start": 124,
              "end": 329
            },
            "definite": false,
            "start": 108,
            "end": 329
          }
        ],
        "declare": false,
        "start": 104,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 330
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 330
}
```
