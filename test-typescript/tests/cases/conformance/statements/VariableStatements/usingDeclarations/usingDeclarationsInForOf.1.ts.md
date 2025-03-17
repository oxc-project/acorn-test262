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
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "using",
        "declare": false
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 21,
                  "end": 35,
                  "object": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 27,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 35,
                    "name": "dispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 36,
                  "end": 41,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 39,
                    "end": 41,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 45,
            "end": 49,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Identifier",
            "start": 51,
            "end": 60,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 66,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
