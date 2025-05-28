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
          "decorators": [],
          "name": "getSomething",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
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
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 65,
      "end": 98,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 80,
        "end": 98,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 95,
          "decorators": [],
          "name": "Something",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 96,
          "end": 98,
          "body": []
        },
        "abstract": false,
        "declare": false
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
  "end": 85,
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
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "getSomething",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "decorators": [],
            "name": "getSomething",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 59,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 67,
              "decorators": [],
              "name": "instance",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 70,
              "end": 84,
              "callee": {
                "type": "Identifier",
                "start": 70,
                "end": 82,
                "decorators": [],
                "name": "getSomething",
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
