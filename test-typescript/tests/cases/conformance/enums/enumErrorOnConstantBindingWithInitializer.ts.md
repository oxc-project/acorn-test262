enumErrorOnConstantBindingWithInitializer.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Thing",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      }
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 80,
            "end": 97,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 82,
                "end": 95,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 87,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
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
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 90,
                    "end": 95,
                    "raw": "\"123\"",
                    "value": "123"
                  }
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 100,
            "end": 105,
            "decorators": [],
            "name": "thing",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 108,
      "end": 134,
      "body": {
        "type": "TSEnumBody",
        "start": 115,
        "end": 134,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 119,
            "end": 131,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 123,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "value",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
