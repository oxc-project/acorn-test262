asyncawait.ts
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 49,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 46,
          "end": 49,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "async",
          "optional": false
        },
        "params": [
          {
            "type": "RestElement",
            "start": 25,
            "end": 39,
            "argument": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "decorators": [],
              "name": "args",
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
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 40,
          "end": 45,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 42,
            "end": 45
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 24,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "T",
                "optional": false
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
      "start": 50,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 57,
        "end": 96,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 93,
          "end": 96,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "decorators": [],
          "name": "await",
          "optional": false
        },
        "params": [
          {
            "type": "RestElement",
            "start": 72,
            "end": 86,
            "argument": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "args",
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
            }
          }
        ],
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
a.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "raw": "'asyncawait'",
        "value": "asyncawait"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 97,
      "declaration": {
        "type": "CallExpression",
        "start": 58,
        "end": 96,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 64,
            "end": 95,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 70,
              "end": 95,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 76,
                  "end": 94,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 92,
                      "end": 93,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 76,
                    "end": 91,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 83,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 91,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 70,
                "end": 75,
                "decorators": [],
                "name": "await",
                "optional": false
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
          "decorators": [],
          "name": "async",
          "optional": false
        },
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
b.ts
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
        "async": true,
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
                "raw": "0",
                "value": 0
              }
            }
          ]
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
c.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "raw": "'asyncawait'",
        "value": "asyncawait"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 74,
      "declaration": {
        "type": "CallExpression",
        "start": 58,
        "end": 73,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
          "decorators": [],
          "name": "async",
          "optional": false
        },
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
  "sourceType": "module"
}
```
d.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "raw": "'asyncawait'",
        "value": "asyncawait"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 44,
      "end": 65,
      "declaration": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "async",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
e.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "raw": "'asyncawait'",
        "value": "asyncawait"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "async",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "await",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 44,
      "end": 64,
      "declaration": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "async",
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 91,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 73,
        "end": 91,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 88,
          "end": 91,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 82,
          "end": 85,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
