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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 19,
              "end": 27,
              "callee": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 74,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 36,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 53,
          "name": "Context",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 54,
          "end": 74,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 58,
              "end": 72,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 62,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 65,
                  "end": 71
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "name": "Context",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "name": "Context",
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
        "end": 40,
        "value": "./context",
        "raw": "\"./context\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 94,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 72,
              "name": "context",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 72,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 72,
                    "name": "Context",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 83,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 86,
                    "end": 91,
                    "value": "bar",
                    "raw": "'bar'"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 160,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 103,
        "end": 160,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 109,
            "end": 159,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 120,
              "name": "withContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 123,
              "end": 159,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 124,
                  "end": 149,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 126,
                      "end": 138,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "name": "Key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 138,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 149,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 149,
                        "name": "Context",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
