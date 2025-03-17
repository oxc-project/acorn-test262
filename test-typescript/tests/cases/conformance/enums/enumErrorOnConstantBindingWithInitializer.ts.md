__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "name": "thing",
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
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 105,
          "id": {
            "type": "ObjectPattern",
            "start": 80,
            "end": 97,
            "properties": [
              {
                "type": "Property",
                "start": 82,
                "end": 95,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 87,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 82,
                  "end": 95,
                  "left": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 87,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 90,
                    "end": 95,
                    "value": "123",
                    "raw": "\"123\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 100,
            "end": 105,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 119,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 123,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 126,
            "end": 131,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
