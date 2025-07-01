__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 23,
            "end": 29
          },
          "start": 21,
          "end": 29
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MutableRefObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
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
                "start": 34,
                "end": 35
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 34,
              "end": 35
            }
          ],
          "start": 33,
          "end": 36
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
                "name": "current",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 50
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
                    "start": 52,
                    "end": 53
                  },
                  "typeArguments": null,
                  "start": 52,
                  "end": 53
                },
                "start": 50,
                "end": 53
              },
              "accessibility": null,
              "static": false,
              "start": 43,
              "end": 54
            }
          ],
          "start": 37,
          "end": 56
        },
        "declare": false,
        "start": 7,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 79
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 80,
              "end": 81
            }
          ],
          "start": 79,
          "end": 82
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "current",
            "optional": false,
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
            "start": 83,
            "end": 93
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MutableRefObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 112
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "typeArguments": null,
                  "start": 113,
                  "end": 114
                }
              ],
              "start": 112,
              "end": 115
            },
            "start": 96,
            "end": 115
          },
          "start": 94,
          "end": 115
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 138
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 138
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 131,
                    "end": 138
                  }
                ],
                "start": 129,
                "end": 140
              },
              "start": 122,
              "end": 141
            }
          ],
          "start": 116,
          "end": 143
        },
        "expression": false,
        "start": 64,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 143
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useCsvParser",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 169
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parserRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 199
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "useRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 208
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSImportType",
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "csv-parse",
                                      "raw": "\"csv-parse\"",
                                      "start": 223,
                                      "end": 234
                                    },
                                    "start": 223,
                                    "end": 234
                                  },
                                  "options": null,
                                  "qualifier": null,
                                  "typeArguments": null,
                                  "start": 216,
                                  "end": 235
                                },
                                "typeArguments": null,
                                "start": 209,
                                "end": 235
                              }
                            ],
                            "start": 208,
                            "end": 236
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 237,
                              "end": 241
                            }
                          ],
                          "optional": false,
                          "start": 202,
                          "end": 242
                        },
                        "definite": false,
                        "start": 190,
                        "end": 242
                      }
                    ],
                    "declare": false,
                    "start": 184,
                    "end": 243
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parserRef",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 264
                    },
                    "start": 248,
                    "end": 265
                  }
                ],
                "start": 178,
                "end": 267
              },
              "id": null,
              "generator": false,
              "start": 172,
              "end": 267
            },
            "definite": false,
            "start": 157,
            "end": 267
          }
        ],
        "declare": false,
        "start": 151,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 144,
      "end": 268
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
}
```
