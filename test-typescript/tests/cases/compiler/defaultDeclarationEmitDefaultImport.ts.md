__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 64,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 64,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 28,
          "name": "getSomething",
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
          "start": 42,
          "end": 64,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 44,
              "end": 62,
              "argument": {
                "type": "TSAsExpression",
                "start": 51,
                "end": 62,
                "expression": {
                  "type": "Literal",
                  "start": 51,
                  "end": 55,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 59,
                  "end": 62
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 30,
          "end": 41,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 32,
            "end": 41,
            "typeName": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "name": "Something",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 65,
      "end": 98,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 80,
        "end": 98,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 95,
          "name": "Something",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 96,
          "end": 98,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "end": 86,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "name": "Thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "name": "getSomething",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "name": "getSomething",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 44,
        "value": "./root",
        "raw": "\"./root\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 59,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 67,
              "name": "instance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 70,
              "end": 84,
              "callee": {
                "type": "Identifier",
                "start": 70,
                "end": 82,
                "name": "getSomething",
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
