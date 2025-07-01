__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 54,
                  "end": 57
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 51,
                "end": 57
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 101,
                    "end": 104
                  },
                  "id": null,
                  "generator": false,
                  "start": 95,
                  "end": 104
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 92,
                "end": 104
              }
            ],
            "start": 10,
            "end": 106
          },
          "definite": false,
          "start": 6,
          "end": 106
        }
      ],
      "declare": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 111
        },
        "optional": false,
        "computed": false,
        "start": 108,
        "end": 111
      },
      "directive": null,
      "start": 108,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 113
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
        },
        "optional": false,
        "computed": false,
        "start": 112,
        "end": 115
      },
      "directive": null,
      "start": 112,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
