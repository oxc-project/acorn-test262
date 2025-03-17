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
            "name": "classMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 16,
            "name": "classMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 52,
              "end": 62,
              "callee": {
                "type": "Identifier",
                "start": 52,
                "end": 60,
                "name": "classMap",
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 23,
        "name": "ClassMapDirective",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 26,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
            "name": "ClassMapDirective",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 58,
            "name": "ClassMapDirective",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 146,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 84,
              "name": "directive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 89,
              "end": 145,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 102,
                  "name": "class_",
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
                        "name": "C",
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
                "start": 109,
                "end": 145,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "ObjectExpression",
                  "start": 116,
                  "end": 144,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 122,
                      "end": 139,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 131,
                        "name": "directive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 139,
                        "name": "class_",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
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
                      "name": "C",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 201,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 155,
        "end": 201,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 161,
            "end": 200,
            "id": {
              "type": "Identifier",
              "start": 161,
              "end": 169,
              "name": "classMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 172,
              "end": 200,
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 181,
                "name": "directive",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 182,
                  "end": 199,
                  "name": "ClassMapDirective",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
