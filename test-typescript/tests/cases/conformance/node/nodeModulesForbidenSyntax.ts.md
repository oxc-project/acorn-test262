subfolder/index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 29,
            "end": 54,
            "async": false,
            "body": {
              "type": "TSTypeAssertion",
              "start": 38,
              "end": 54,
              "expression": {
                "type": "TSTypeAssertion",
                "start": 41,
                "end": 54,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 47,
                  "end": 53,
                  "argument": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "raw": "0",
                    "value": 0
                  },
                  "operator": "void",
                  "prefix": true
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
subfolder2/index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 29,
            "end": 54,
            "async": false,
            "body": {
              "type": "TSTypeAssertion",
              "start": 38,
              "end": 54,
              "expression": {
                "type": "TSTypeAssertion",
                "start": 41,
                "end": 54,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 47,
                  "end": 53,
                  "argument": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "raw": "0",
                    "value": 0
                  },
                  "operator": "void",
                  "prefix": true
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
subfolder2/another/index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 29,
            "end": 54,
            "async": false,
            "body": {
              "type": "TSTypeAssertion",
              "start": 38,
              "end": 54,
              "expression": {
                "type": "TSTypeAssertion",
                "start": 41,
                "end": 54,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 47,
                  "end": 53,
                  "argument": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "raw": "0",
                    "value": 0
                  },
                  "operator": "void",
                  "prefix": true
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 29,
            "end": 54,
            "async": false,
            "body": {
              "type": "TSTypeAssertion",
              "start": 38,
              "end": 54,
              "expression": {
                "type": "TSTypeAssertion",
                "start": 41,
                "end": 54,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 47,
                  "end": 53,
                  "argument": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "raw": "0",
                    "value": 0
                  },
                  "operator": "void",
                  "prefix": true
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
