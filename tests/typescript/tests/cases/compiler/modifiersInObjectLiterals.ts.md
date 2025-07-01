__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 24
                },
                "value": {
                  "type": "Literal",
                  "value": "hey",
                  "raw": "'hey'",
                  "start": 26,
                  "end": 31
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 31
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
                },
                "value": {
                  "type": "Literal",
                  "value": "nay",
                  "raw": "'nay'",
                  "start": 47,
                  "end": 52
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 34,
                "end": 52
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 68
                },
                "value": {
                  "type": "Literal",
                  "value": "oh my",
                  "raw": "'oh my'",
                  "start": 70,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 55,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noWay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 94
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 96,
                  "end": 101
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 101
              }
            ],
            "start": 11,
            "end": 104
          },
          "definite": false,
          "start": 4,
          "end": 104
        }
      ],
      "declare": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 111
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 115
              },
              "optional": false,
              "computed": false,
              "start": 107,
              "end": 115
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 122
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 126
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 126
            },
            "start": 107,
            "end": 126
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "optional": false,
            "computed": false,
            "start": 129,
            "end": 137
          },
          "start": 107,
          "end": 137
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "noWay",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 140,
          "end": 150
        },
        "start": 107,
        "end": 150
      },
      "directive": null,
      "start": 107,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
