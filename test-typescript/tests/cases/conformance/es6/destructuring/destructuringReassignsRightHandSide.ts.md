destructuringReassignsRightHandSide.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 12,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 15,
            "end": 33,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 23,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 20,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 25,
                "end": 31,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 28,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 30,
                  "end": 31,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 47,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 112,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 110,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 92,
          "end": 104,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 94,
              "end": 97,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 97,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 94,
                "end": 97,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 99,
              "end": 102,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 107,
          "end": 110,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 170,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 152,
            "end": 164,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 157,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 159,
                "end": 162,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
