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
        "name": "Colors",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cornflower",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 81
            },
            "initializer": null,
            "computed": false,
            "start": 71,
            "end": 81
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FancyPink",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 139
            },
            "initializer": null,
            "computed": false,
            "start": 130,
            "end": 139
          }
        ],
        "start": 33,
        "end": 141
      },
      "const": false,
      "declare": false,
      "start": 21,
      "end": 141
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Colors",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 176
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cornflower",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 187
            },
            "optional": false,
            "computed": false,
            "start": 170,
            "end": 187
          },
          "definite": false,
          "start": 166,
          "end": 187
        }
      ],
      "declare": false,
      "start": 162,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 190
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Colors",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 199
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "FancyPink",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 209
          },
          "optional": false,
          "computed": false,
          "start": 193,
          "end": 209
        },
        "start": 189,
        "end": 209
      },
      "directive": null,
      "start": 189,
      "end": 210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 211
}
```
