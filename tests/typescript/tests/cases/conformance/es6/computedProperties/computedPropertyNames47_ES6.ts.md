__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 13,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 8,
        "end": 13,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 10,
            "end": 11,
            "id": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "x",
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
      "type": "TSEnumDeclaration",
      "start": 14,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 22,
        "end": 27,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
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
      "start": 28,
      "end": 62,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 36,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 42,
                "end": 59,
                "kind": "init",
                "key": {
                  "type": "LogicalExpression",
                  "start": 43,
                  "end": 55,
                  "left": {
                    "type": "MemberExpression",
                    "start": 43,
                    "end": 47,
                    "object": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 45,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "MemberExpression",
                    "start": 51,
                    "end": 55,
                    "object": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 53,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 59,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
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
