__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 30,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 21,
          "end": 29,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 23,
            "end": 29
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 56,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 56,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "name": "MutableRefObject",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 33,
          "end": 36,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 35,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
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
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 56,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 43,
              "end": 54,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 50,
                "name": "current",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
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
      "start": 57,
      "end": 143,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 143,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 79,
          "name": "useRef",
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
            "start": 83,
            "end": 93,
            "name": "current",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "T",
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
          "start": 116,
          "end": 143,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 122,
              "end": 141,
              "argument": {
                "type": "ObjectExpression",
                "start": 129,
                "end": 140,
                "properties": [
                  {
                    "type": "Property",
                    "start": 131,
                    "end": 138,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 138,
                      "name": "current",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 138,
                      "name": "current",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 79,
          "end": 82,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 80,
              "end": 81,
              "name": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
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
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 94,
          "end": 115,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 96,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 112,
              "name": "MutableRefObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 112,
              "end": 115,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 144,
      "end": 268,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 151,
        "end": 268,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 157,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 169,
              "name": "useCsvParser",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 172,
              "end": 267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 267,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 184,
                    "end": 243,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 242,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 199,
                          "name": "parserRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 202,
                          "end": 242,
                          "callee": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 208,
                            "name": "useRef",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 237,
                              "end": 241,
                              "value": null,
                              "raw": "null"
                            }
                          ],
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 208,
                            "end": 236,
                            "params": [
                              {
                                "type": "TSTypeQuery",
                                "start": 209,
                                "end": 235,
                                "exprName": {
                                  "type": "TSImportType",
                                  "start": 216,
                                  "end": 235,
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "start": 223,
                                    "end": 234,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 223,
                                      "end": 234,
                                      "value": "csv-parse",
                                      "raw": "\"csv-parse\""
                                    }
                                  },
                                  "options": null,
                                  "qualifier": null,
                                  "typeArguments": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 248,
                    "end": 265,
                    "argument": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 264,
                      "name": "parserRef",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
