__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 27,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 27,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 27,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 37,
        "raw": "\"./cls\"",
        "value": "./cls",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 23,
            "decorators": [],
            "name": "Fooa",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 68,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 68,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 67,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 57,
              "end": 67,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "decorators": [],
                "name": "Fooa",
                "optional": false,
                "typeAnnotation": null
              },
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 108,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 100,
        "end": 107,
        "raw": "\"./cls\"",
        "value": "./cls",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 78,
          "end": 93,
          "exported": {
            "type": "Identifier",
            "start": 89,
            "end": 93,
            "decorators": [],
            "name": "Foob",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "default",
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
