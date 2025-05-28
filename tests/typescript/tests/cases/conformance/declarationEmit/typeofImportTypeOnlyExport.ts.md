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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 16,
            "decorators": [],
            "name": "classMap",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "value": "./lit.js",
        "raw": "'./lit.js'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 63,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 63,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 62,
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
              "callee": {
                "type": "Identifier",
                "start": 52,
                "end": 60,
                "decorators": [],
                "name": "classMap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 26,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 60,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 41,
          "end": 58,
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 58,
            "decorators": [],
            "name": "ClassMapDirective",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 58,
            "decorators": [],
            "name": "ClassMapDirective",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 146,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 146,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 145,
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
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 89,
                "end": 92,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 90,
                    "end": 91,
                    "name": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "decorators": [],
                      "name": "C",
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 109,
                "end": 145,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "start": 116,
                  "end": 144,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 122,
                      "end": 139,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 131,
                        "decorators": [],
                        "name": "directive",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 139,
                        "decorators": [],
                        "name": "class_",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "id": null,
                "generator": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 201,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 155,
        "end": 201,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 161,
            "end": 200,
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
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 181,
                "decorators": [],
                "name": "directive",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
              "optional": false
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
