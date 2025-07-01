__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 34,
                    "end": 40
                  }
                ],
                "start": 25,
                "end": 40
              },
              "start": 23,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 17,
            "end": 41
          }
        ],
        "start": 13,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 72
                },
                "typeArguments": null,
                "start": 67,
                "end": 72
              },
              "start": 65,
              "end": 72
            },
            "start": 60,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 72
        }
      ],
      "declare": true,
      "start": 46,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 87
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 87
                  },
                  "right": {
                    "type": "Literal",
                    "value": "123",
                    "raw": "\"123\"",
                    "start": 90,
                    "end": 95
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 95
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 82,
                "end": 95
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 97
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 105
          },
          "definite": false,
          "start": 80,
          "end": 105
        }
      ],
      "declare": false,
      "start": 74,
      "end": 106
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 123
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 131
            },
            "computed": false,
            "start": 119,
            "end": 131
          }
        ],
        "start": 115,
        "end": 134
      },
      "const": false,
      "declare": false,
      "start": 108,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
