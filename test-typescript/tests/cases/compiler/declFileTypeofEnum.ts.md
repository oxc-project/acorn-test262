declFileTypeofEnum.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 104,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 104,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 22,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
              "decorators": [],
              "name": "monday",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 35,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "tuesday",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 50,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "wednesday",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 64,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 64,
              "decorators": [],
              "name": "thursday",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 70,
            "end": 76,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "friday",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 82,
            "end": 90,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "decorators": [],
              "name": "saturday",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 102,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "sunday",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "days",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 120,
            "decorators": [],
            "name": "weekendDay",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 123,
            "end": 136,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "days",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 128,
              "end": 136,
              "decorators": [],
              "name": "saturday",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 153,
            "decorators": [],
            "name": "daysOfMonth",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "days",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 189,
            "decorators": [],
            "name": "daysOfYear",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 178,
                "end": 189,
                "exprName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "decorators": [],
                  "name": "days",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
