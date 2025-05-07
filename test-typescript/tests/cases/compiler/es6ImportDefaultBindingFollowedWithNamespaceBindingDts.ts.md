__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
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
  "end": 103,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 62,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 61,
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
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 23,
          "end": 44,
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 44,
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 70,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 74,
            "end": 102,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 78,
              "end": 102,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 82,
                "end": 100,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 98,
                  "decorators": [],
                  "name": "nameSpaceBinding",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
