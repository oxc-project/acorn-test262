__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "days",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "monday",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuesday",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 35
            },
            "initializer": null,
            "computed": false,
            "start": 28,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "wednesday",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 50
            },
            "initializer": null,
            "computed": false,
            "start": 41,
            "end": 50
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thursday",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 64
            },
            "initializer": null,
            "computed": false,
            "start": 56,
            "end": 64
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "friday",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "initializer": null,
            "computed": false,
            "start": 70,
            "end": 76
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "saturday",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 90
            },
            "initializer": null,
            "computed": false,
            "start": 82,
            "end": 90
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "sunday",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            },
            "initializer": null,
            "computed": false,
            "start": 96,
            "end": 102
          }
        ],
        "start": 10,
        "end": 104
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "weekendDay",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 120
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "days",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 127
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "saturday",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 136
            },
            "optional": false,
            "computed": false,
            "start": 123,
            "end": 136
          },
          "definite": false,
          "start": 110,
          "end": 136
        }
      ],
      "declare": false,
      "start": 106,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "daysOfMonth",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 153
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "days",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 160
          },
          "definite": false,
          "start": 142,
          "end": 160
        }
      ],
      "declare": false,
      "start": 138,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "daysOfYear",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "days",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 189
                },
                "typeArguments": null,
                "start": 178,
                "end": 189
              },
              "start": 176,
              "end": 189
            },
            "start": 166,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 189
        }
      ],
      "declare": false,
      "start": 162,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
}
```
