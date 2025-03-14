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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Evt",
          "optional": false
        }
      },
      "exportKind": "type",
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
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "'./utils'",
        "value": "./utils"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Evt",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Evt",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 73,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 45,
              "end": 73,
              "async": false,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 58,
                "end": 73,
                "async": false,
                "body": {
                  "type": "TSNonNullExpression",
                  "start": 68,
                  "end": 73,
                  "expression": {
                    "type": "Literal",
                    "start": 68,
                    "end": 72,
                    "raw": "null",
                    "value": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 53,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 45,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 46,
                    "end": 47,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "'./decl'",
        "value": "./decl"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 58,
        "raw": "'./utils'",
        "value": "./utils"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 37,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "Evt",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "Evt",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 105,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "f",
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "o",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 82,
                    "end": 103,
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 87,
                              "decorators": [],
                              "name": "v",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
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
                                  "raw": "null",
                                  "value": null
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
                                  "decorators": [],
                                  "name": "Evt",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "o",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
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
