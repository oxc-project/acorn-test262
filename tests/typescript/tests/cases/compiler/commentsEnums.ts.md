__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 211,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "decorators": [],
        "name": "Colors",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 141,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 81,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 81,
              "decorators": [],
              "name": "Cornflower",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 130,
            "end": 139,
            "id": {
              "type": "Identifier",
              "start": 130,
              "end": 139,
              "decorators": [],
              "name": "FancyPink",
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
      "start": 162,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 170,
            "end": 187,
            "object": {
              "type": "Identifier",
              "start": 170,
              "end": 176,
              "decorators": [],
              "name": "Colors",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 187,
              "decorators": [],
              "name": "Cornflower",
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
      "type": "ExpressionStatement",
      "start": 189,
      "end": 210,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 209,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 193,
          "end": 209,
          "object": {
            "type": "Identifier",
            "start": 193,
            "end": 199,
            "decorators": [],
            "name": "Colors",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 209,
            "decorators": [],
            "name": "FancyPink",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
