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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 30,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 21,
          "end": 29,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 23,
            "end": 29
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 268,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 56,
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 56,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 43,
              "end": 54,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 50,
                "decorators": [],
                "name": "current",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "MutableRefObject",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 33,
          "end": 36,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 35,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 143,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 143,
        "async": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 138,
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 138,
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 79,
          "decorators": [],
          "name": "useRef",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 83,
            "end": 93,
            "decorators": [],
            "name": "current",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 94,
          "end": 115,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 96,
            "end": 115,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 112,
              "end": 115,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 114,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 112,
              "decorators": [],
              "name": "MutableRefObject",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 79,
          "end": 82,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 80,
              "end": 81,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 144,
      "end": 268,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 151,
        "end": 268,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 157,
            "end": 267,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 169,
              "decorators": [],
              "name": "useCsvParser",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 172,
              "end": 267,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 199,
                          "decorators": [],
                          "name": "parserRef",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 202,
                          "end": 242,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 237,
                              "end": 241,
                              "raw": "null",
                              "value": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 208,
                            "decorators": [],
                            "name": "useRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                      "raw": "\"csv-parse\"",
                                      "value": "csv-parse"
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 248,
                    "end": 265,
                    "argument": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 264,
                      "decorators": [],
                      "name": "parserRef",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
