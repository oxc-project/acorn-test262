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
  "end": 143,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 107,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 21,
            "name": "defaultBinding",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "nameSpaceBinding",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 106,
        "value": "es6ImportDefaultBindingFollowedWithNamespaceBinding_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamespaceBinding_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 121,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 115,
                "end": 121
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 124,
            "end": 142,
            "object": {
              "type": "Identifier",
              "start": 124,
              "end": 140,
              "name": "nameSpaceBinding",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
