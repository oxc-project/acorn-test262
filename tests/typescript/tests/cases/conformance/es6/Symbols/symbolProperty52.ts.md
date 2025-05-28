__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 36,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 32,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "decorators": [],
                    "name": "nonsense",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 44,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 47,
          "end": 49,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 73,
      "expression": {
        "type": "MemberExpression",
        "start": 52,
        "end": 72,
        "object": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "MemberExpression",
          "start": 56,
          "end": 71,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 71,
            "decorators": [],
            "name": "nonsense",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
