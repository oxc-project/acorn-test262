__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 12,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 20,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 25,
                "end": 31,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 28,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 30,
                  "end": 31,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 47,
            "name": "bar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "properties": [
            {
              "type": "Property",
              "start": 94,
              "end": 97,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 97,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 94,
                "end": 97,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 99,
              "end": 102,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 107,
          "end": 110,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 152,
            "end": 164,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 157,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 159,
                "end": 162,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 167,
            "end": 170,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
