__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 46,
        "raw": "'./intermediate'",
        "value": "./intermediate"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 24,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "intermediate",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 78,
            "decorators": [],
            "name": "ghost",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 78,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 60,
                  "end": 78,
                  "left": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 72,
                    "decorators": [],
                    "name": "intermediate",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 78,
                    "decorators": [],
                    "name": "Ghost",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 81,
            "end": 105,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 85,
              "end": 103,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 97,
                "decorators": [],
                "name": "intermediate",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 103,
                "decorators": [],
                "name": "Ghost",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "end": 29,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "exported": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "'./ghost'",
        "value": "./ghost"
      }
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
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 21,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Ghost",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
