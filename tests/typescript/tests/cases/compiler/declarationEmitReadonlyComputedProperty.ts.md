__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "name": "SYMBOL",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 22,
              "end": 30
            },
            "definite": false,
            "start": 13,
            "end": 30
          }
        ],
        "declare": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Interface",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 58
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SYMBOL",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                },
                "start": 80,
                "end": 88
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 89
            }
          ],
          "start": 59,
          "end": 150
        },
        "declare": false,
        "start": 39,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 32,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 182
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Interface",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 195
            },
            "typeArguments": null,
            "start": 186,
            "end": 195
          },
          "start": 184,
          "end": 195
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SYMBOL",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 220
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 223,
                      "end": 225
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 213,
                    "end": 225
                  }
                ],
                "start": 207,
                "end": 229
              },
              "start": 200,
              "end": 229
            }
          ],
          "start": 196,
          "end": 231
        },
        "expression": false,
        "start": 159,
        "end": 231
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
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
            "name": "createInstance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 23
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createInstance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 23
          },
          "importKind": "value",
          "start": 9,
          "end": 23
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./bug",
        "raw": "'./bug'",
        "start": 31,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
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
              "name": "spread",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 59
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createInstance",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 83
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 69,
                    "end": 85
                  },
                  "start": 66,
                  "end": 85
                }
              ],
              "start": 62,
              "end": 88
            },
            "definite": false,
            "start": 53,
            "end": 88
          }
        ],
        "declare": false,
        "start": 47,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
