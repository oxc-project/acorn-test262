__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "raw": "'./lit.js'",
        "value": "./lit.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 16,
            "decorators": [],
            "name": "classMap",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 16,
            "decorators": [],
            "name": "classMap",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 62,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 52,
              "end": 62,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 52,
                "end": 60,
                "decorators": [],
                "name": "classMap",
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
  "end": 202,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 26,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 23,
        "decorators": [],
        "name": "ClassMapDirective",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 60,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 41,
          "end": 58,
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 58,
            "decorators": [],
            "name": "ClassMapDirective",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 58,
            "decorators": [],
            "name": "ClassMapDirective",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 146,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 145,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 84,
              "decorators": [],
              "name": "directive",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 89,
              "end": 145,
              "async": false,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 109,
                "end": 145,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 116,
                  "end": 144,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 122,
                      "end": 139,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 131,
                        "decorators": [],
                        "name": "directive",
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
                        "end": 139,
                        "decorators": [],
                        "name": "class_",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 102,
                  "decorators": [],
                  "name": "class_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 101,
                      "end": 102,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 89,
                "end": 92,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 90,
                    "end": 91,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 201,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 155,
        "end": 201,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 161,
            "end": 200,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 161,
              "end": 169,
              "decorators": [],
              "name": "classMap",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 172,
              "end": 200,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 182,
                  "end": 199,
                  "decorators": [],
                  "name": "ClassMapDirective",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 181,
                "decorators": [],
                "name": "directive",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
