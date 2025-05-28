__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
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
        "kind": "using",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 21,
                  "end": 35,
                  "object": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 27,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 35,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 36,
                  "end": 41,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 39,
                    "end": 41,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
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
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
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
