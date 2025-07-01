__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17,
                    "end": 23
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonsense",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 24,
                    "end": 32
                  },
                  "optional": false,
                  "computed": false,
                  "start": 17,
                  "end": 32
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 35,
                  "end": 36
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 16,
                "end": 36
              }
            ],
            "start": 10,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 44
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 47,
          "end": 49
        },
        "start": 41,
        "end": 49
      },
      "directive": null,
      "start": 41,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 55
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 62
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonsense",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 56,
          "end": 71
        },
        "optional": false,
        "computed": true,
        "start": 52,
        "end": 72
      },
      "directive": null,
      "start": 52,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
