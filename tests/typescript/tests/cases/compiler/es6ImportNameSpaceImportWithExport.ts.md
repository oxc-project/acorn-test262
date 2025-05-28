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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
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
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 66,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 82,
                "decorators": [],
                "name": "nameSpaceBinding",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
