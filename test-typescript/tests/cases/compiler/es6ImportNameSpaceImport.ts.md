es6ImportNameSpaceImport_0.ts
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
  "sourceType": "module"
}
```
es6ImportNameSpaceImport_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 65,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 64,
        "raw": "\"./es6ImportNameSpaceImport_0\"",
        "value": "./es6ImportNameSpaceImport_0"
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
      "start": 66,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 74,
            "end": 92,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 74,
              "end": 90,
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
      "start": 94,
      "end": 160,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 159,
        "raw": "\"./es6ImportNameSpaceImport_0\"",
        "value": "./es6ImportNameSpaceImport_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 101,
          "end": 123,
          "local": {
            "type": "Identifier",
            "start": 106,
            "end": 123,
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
