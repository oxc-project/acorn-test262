__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "classMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "classMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 16
          },
          "importKind": "value",
          "start": 8,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./lit.js",
        "raw": "'./lit.js'",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "classMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 60
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 52,
              "end": 62
            },
            "definite": false,
            "start": 48,
            "end": 62
          }
        ],
        "declare": false,
        "start": 42,
        "end": 63
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassMapDirective",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 23
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 24,
        "end": 26
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassMapDirective",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 58
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassMapDirective",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 58
          },
          "exportKind": "value",
          "start": 41,
          "end": 58
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 28,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "directive",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 84
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 91
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 90,
                    "end": 91
                  }
                ],
                "start": 89,
                "end": 92
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "class_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 102
                      },
                      "typeArguments": null,
                      "start": 101,
                      "end": 102
                    },
                    "start": 99,
                    "end": 102
                  },
                  "start": 93,
                  "end": 102
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "directive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 131
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "class_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 139
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 122,
                      "end": 139
                    }
                  ],
                  "start": 116,
                  "end": 144
                },
                "id": null,
                "generator": false,
                "start": 109,
                "end": 145
              },
              "id": null,
              "generator": false,
              "start": 89,
              "end": 145
            },
            "definite": false,
            "start": 75,
            "end": 145
          }
        ],
        "declare": false,
        "start": 69,
        "end": 146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 146
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "classMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 169
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "directive",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 181
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassMapDirective",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 199
                }
              ],
              "optional": false,
              "start": 172,
              "end": 200
            },
            "definite": false,
            "start": 161,
            "end": 200
          }
        ],
        "declare": false,
        "start": 155,
        "end": 201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 148,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 201
}
```
