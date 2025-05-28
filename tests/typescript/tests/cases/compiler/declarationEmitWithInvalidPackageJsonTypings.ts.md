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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 56,
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
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
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
                "decorators": [],
                "name": "current",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "useRef",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 112,
              "decorators": [],
              "name": "MutableRefObject",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 138,
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 138,
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 144,
      "end": 268,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 151,
        "end": 268,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 157,
            "end": 267,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 267,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 184,
                    "end": 243,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 242,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 208,
                            "decorators": [],
                            "name": "useRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
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
                      "decorators": [],
                      "name": "parserRef",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
