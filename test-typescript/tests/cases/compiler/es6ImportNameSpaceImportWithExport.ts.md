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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 50,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 14,
          "end": 35,
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "name": "nameSpaceBinding",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 49,
        "value": "server",
        "raw": "\"server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 66,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 82,
                "name": "nameSpaceBinding",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 137,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 100,
          "end": 122,
          "local": {
            "type": "Identifier",
            "start": 105,
            "end": 122,
            "name": "nameSpaceBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 128,
        "end": 136,
        "value": "server",
        "raw": "\"server\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
