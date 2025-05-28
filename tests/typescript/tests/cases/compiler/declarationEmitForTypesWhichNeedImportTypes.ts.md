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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Named",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 80,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 34,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 54,
          "decorators": [],
          "name": "createNamed",
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
          "start": 56,
          "end": 63,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 58,
            "end": 63,
            "typeName": {
              "type": "Identifier",
              "start": 58,
              "end": 63,
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
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
        "expression": false
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
  "end": 71,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "createNamed",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "value": "./b",
        "raw": "\"./b\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 71,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 71,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 70,
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
              "callee": {
                "type": "Identifier",
                "start": 57,
                "end": 68,
                "decorators": [],
                "name": "createNamed",
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
