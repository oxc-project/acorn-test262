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
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "raw": "10",
              "value": 10
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 66,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 65,
        "raw": "\"es6ImportNameSpaceImportAmd_0\"",
        "value": "es6ImportNameSpaceImportAmd_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 28,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 75,
            "end": 93,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 91,
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 95,
      "end": 162,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 130,
        "end": 161,
        "raw": "\"es6ImportNameSpaceImportAmd_0\"",
        "value": "es6ImportNameSpaceImportAmd_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 102,
          "end": 124,
          "local": {
            "type": "Identifier",
            "start": 107,
            "end": 124,
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
