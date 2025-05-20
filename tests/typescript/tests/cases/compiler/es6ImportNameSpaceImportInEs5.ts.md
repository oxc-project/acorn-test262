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
              "optional": false,
              "typeAnnotation": null
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
  "end": 184,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 70,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 69,
        "raw": "\"./es6ImportNameSpaceImportInEs5_0\"",
        "value": "./es6ImportNameSpaceImportInEs5_0"
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 97,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 95,
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 170,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 134,
        "end": 169,
        "raw": "\"./es6ImportNameSpaceImportInEs5_0\"",
        "value": "./es6ImportNameSpaceImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 106,
          "end": 128,
          "local": {
            "type": "Identifier",
            "start": 111,
            "end": 128,
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
