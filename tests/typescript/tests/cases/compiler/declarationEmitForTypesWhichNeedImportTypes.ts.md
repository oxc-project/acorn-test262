__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 25,
        "body": {
          "type": "TSInterfaceBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Named",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 80,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 34,
        "end": 80,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 64,
          "end": 80,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 68,
              "end": 78,
              "argument": {
                "type": "ObjectExpression",
                "start": 75,
                "end": 77,
                "properties": []
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 54,
          "decorators": [],
          "name": "createNamed",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 56,
          "end": 63,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 58,
            "end": 63,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 58,
              "end": 63,
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
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
  "end": 71,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "createNamed",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "createNamed",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 57,
              "end": 70,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 57,
                "end": 68,
                "decorators": [],
                "name": "createNamed",
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
