__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
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
  "end": 170,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 37,
        "raw": "\"./server\"",
        "value": "./server",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 21,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 75,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 75,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 74,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 54,
              "end": 74,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 58,
                "end": 72,
                "decorators": [],
                "name": "defaultBinding",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 76,
      "end": 115,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 104,
        "end": 114,
        "raw": "\"./server\"",
        "value": "./server",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 83,
          "end": 98,
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 98,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
