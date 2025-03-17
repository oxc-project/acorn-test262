__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 27,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 19,
              "end": 27,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 36,
        "end": 74,
        "body": {
          "type": "TSInterfaceBody",
          "start": 54,
          "end": 74,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 58,
              "end": 72,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 62,
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 65,
                  "end": 71
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 53,
          "decorators": [],
          "name": "Context",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
  "end": 160,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 40,
        "raw": "\"./context\"",
        "value": "./context"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Key",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Key",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 94,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 72,
              "decorators": [],
              "name": "context",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 72,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 72,
                    "decorators": [],
                    "name": "Context",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 75,
              "end": 94,
              "properties": [
                {
                  "type": "Property",
                  "start": 79,
                  "end": 91,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 83,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 86,
                    "end": 91,
                    "raw": "'bar'",
                    "value": "bar"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 160,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 103,
        "end": 160,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 109,
            "end": 159,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 120,
              "decorators": [],
              "name": "withContext",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 123,
              "end": 159,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 124,
                  "end": 149,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 126,
                      "end": 138,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 138,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 149,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 149,
                        "decorators": [],
                        "name": "Context",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
