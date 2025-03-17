__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "nake",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 10,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 28,
        "name": "doCompile",
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
          "start": 41,
          "end": 52,
          "name": "fileset",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 52,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 52,
                "name": "P0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 68,
          "name": "moduleType",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 68,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 68,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 68,
                "name": "P1",
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
        "start": 70,
        "end": 96,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 77,
            "end": 94,
            "argument": {
              "type": "Identifier",
              "start": 84,
              "end": 93,
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
        "start": 28,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 31,
              "name": "P0",
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
            "start": 33,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "name": "P1",
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
            "start": 37,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 39,
              "name": "P2",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 330,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 330,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 329,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 121,
              "name": "compileServer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 124,
              "end": 329,
              "callee": {
                "type": "Identifier",
                "start": 124,
                "end": 128,
                "name": "task",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 150,
                  "end": 328,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 168,
                    "end": 328,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 175,
                        "end": 264,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 179,
                            "end": 199,
                            "id": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 185,
                              "name": "folder",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 188,
                              "end": 199,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 188,
                                "end": 197,
                                "object": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 192,
                                  "name": "path",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 193,
                                  "end": 197,
                                  "name": "join",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          },
                          {
                            "type": "VariableDeclarator",
                            "start": 209,
                            "end": 264,
                            "id": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 216,
                              "name": "fileset",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 219,
                              "end": 264,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 219,
                                "end": 235,
                                "object": {
                                  "type": "Identifier",
                                  "start": 219,
                                  "end": 223,
                                  "name": "nake",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 224,
                                  "end": 235,
                                  "name": "fileSetSync",
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
                                  "start": 257,
                                  "end": 263,
                                  "name": "folder",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 235,
                                "end": 256,
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
                                ]
                              }
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 267,
                        "end": 326,
                        "argument": {
                          "type": "CallExpression",
                          "start": 274,
                          "end": 325,
                          "callee": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 283,
                            "name": "doCompile",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 305,
                              "end": 312,
                              "name": "fileset",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 314,
                              "end": 324,
                              "name": "moduleType",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 283,
                            "end": 304,
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
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 150,
                    "end": 162,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 151,
                        "end": 153,
                        "name": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 153,
                          "name": "P0",
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
                        "start": 155,
                        "end": 157,
                        "name": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 157,
                          "name": "P1",
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
                        "start": 159,
                        "end": 161,
                        "name": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 161,
                          "name": "P2",
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 149,
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
                ]
              }
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
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
