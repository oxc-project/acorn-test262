__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Evt",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Evt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Evt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./utils",
        "raw": "'./utils'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 73,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 45,
              "end": 73,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 53,
                  "name": "o",
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
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 58,
                "end": 73,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "TSNonNullExpression",
                  "start": 68,
                  "end": 73,
                  "expression": {
                    "type": "Literal",
                    "start": 68,
                    "end": 72,
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 64,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 45,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 46,
                    "end": 47,
                    "name": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "value": "./decl",
        "raw": "'./decl'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 58,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 37,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "name": "Evt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "name": "Evt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 58,
        "value": "./utils",
        "raw": "'./utils'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 106,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 77,
              "end": 105,
              "properties": [
                {
                  "type": "Property",
                  "start": 79,
                  "end": 103,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 82,
                    "end": 103,
                    "callee": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 84,
                        "end": 102,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 86,
                            "end": 101,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 87,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "TSAsExpression",
                              "start": 89,
                              "end": 101,
                              "expression": {
                                "type": "TSNonNullExpression",
                                "start": 89,
                                "end": 94,
                                "expression": {
                                  "type": "Literal",
                                  "start": 89,
                                  "end": 93,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 98,
                                "end": 101,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 101,
                                  "name": "Evt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
