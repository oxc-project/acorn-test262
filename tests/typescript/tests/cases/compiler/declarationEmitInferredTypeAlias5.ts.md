__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Data",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            },
            {
              "type": "TSBooleanKeyword",
              "start": 28,
              "end": 35
            }
          ],
          "start": 19,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 50
                },
                "typeArguments": null,
                "start": 46,
                "end": 50
              },
              "start": 44,
              "end": 50
            },
            "start": 41,
            "end": 50
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 53,
            "end": 57
          },
          "definite": false,
          "start": 41,
          "end": 57
        }
      ],
      "declare": false,
      "start": 37,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Z",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "\"./0\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "str",
              "raw": "\"str\"",
              "start": 51,
              "end": 56
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 60,
              "end": 64
            },
            "start": 51,
            "end": 64
          },
          "definite": false,
          "start": 47,
          "end": 64
        }
      ],
      "declare": false,
      "start": 43,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "exportKind": "value",
          "start": 75,
          "end": 76
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
