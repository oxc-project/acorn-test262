__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 43,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 41,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 40,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 25,
                "end": 40,
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
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 72,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 105,
          "id": {
            "type": "ObjectPattern",
            "start": 80,
            "end": 97,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 82,
                "end": 95,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 87,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 82,
                  "end": 95,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 87,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 90,
                    "end": 95,
                    "value": "123",
                    "raw": "\"123\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 100,
            "end": 105,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 108,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 115,
        "end": 134,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 119,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 123,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
