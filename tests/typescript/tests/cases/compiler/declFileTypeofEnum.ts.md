__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "days",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 104,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
              "decorators": [],
              "name": "monday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "tuesday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "wednesday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 64,
              "decorators": [],
              "name": "thursday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 70,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "friday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 82,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "decorators": [],
              "name": "saturday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "sunday",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 120,
            "decorators": [],
            "name": "weekendDay",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 123,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "days",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 128,
              "end": 136,
              "decorators": [],
              "name": "saturday",
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
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 161,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 153,
            "decorators": [],
            "name": "daysOfMonth",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "days",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 190,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 189,
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
