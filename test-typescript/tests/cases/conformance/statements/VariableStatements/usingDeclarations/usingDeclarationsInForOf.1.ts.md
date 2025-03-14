__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 66,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 66,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 13,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "d1",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "using"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 17,
        "end": 61,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 18,
            "end": 43,
            "properties": [
              {
                "type": "Property",
                "start": 20,
                "end": 41,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 21,
                  "end": 35,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 27,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 35,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 36,
                  "end": 41,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 39,
                    "end": 41,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 45,
            "end": 49,
            "raw": "null",
            "value": null
          },
          {
            "type": "Identifier",
            "start": 51,
            "end": 60,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
