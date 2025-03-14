es6ImportDefaultBindingFollowedWithNamespaceBinding_0.ts
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
es6ImportDefaultBindingFollowedWithNamespaceBinding_1.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 106,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamespaceBinding_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamespaceBinding_0"
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
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 115,
                "end": 121
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 124,
            "end": 142,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 124,
              "end": 140,
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
