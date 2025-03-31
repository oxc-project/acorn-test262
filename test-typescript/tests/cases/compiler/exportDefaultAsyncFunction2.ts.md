__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 49,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "name": "async",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "RestElement",
            "start": 25,
            "end": 39,
            "argument": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 39,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 34,
                "end": 39,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 34,
                  "end": 37
                }
              }
            },
            "value": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 46,
          "end": 49,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 24,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
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
          "start": 40,
          "end": 45,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 42,
            "end": 45
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
      "start": 50,
      "end": 96,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 57,
        "end": 96,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "name": "await",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "RestElement",
            "start": 72,
            "end": 86,
            "argument": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 86,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 81,
                "end": 86,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 81,
                  "end": 84
                }
              }
            },
            "value": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 93,
          "end": 96,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 87,
          "end": 92,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 89,
            "end": 92
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
  "end": 98,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "value": "asyncawait",
        "raw": "'asyncawait'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 97,
      "declaration": {
        "type": "CallExpression",
        "start": 58,
        "end": 96,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
          "name": "async",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 64,
            "end": 95,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 70,
              "end": 95,
              "callee": {
                "type": "Identifier",
                "start": 70,
                "end": 75,
                "name": "await",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 76,
                  "end": 94,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 76,
                    "end": 91,
                    "object": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 83,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 91,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 92,
                      "end": 93,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
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
  "end": 42,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "ArrowFunctionExpression",
        "start": 15,
        "end": 40,
        "id": null,
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 40,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 29,
              "end": 38,
              "argument": {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "typeParameters": null,
        "returnType": null
      },
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
  "end": 75,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "value": "asyncawait",
        "raw": "'asyncawait'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 74,
      "declaration": {
        "type": "CallExpression",
        "start": 58,
        "end": 73,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
          "name": "async",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 63,
          "end": 71,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 64,
              "end": 70
            }
          ]
        }
      },
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "value": "asyncawait",
        "raw": "'asyncawait'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 44,
      "end": 65,
      "declaration": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "async",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
  "end": 91,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "value": "asyncawait",
        "raw": "'asyncawait'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 44,
      "end": 64,
      "declaration": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "async",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 91,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 73,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 82,
          "end": 85,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 88,
          "end": 91,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
