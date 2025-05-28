__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 156,
  "end": 221,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 168,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 169,
          "end": 180,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 172,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 174,
              "end": 175,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 177,
              "end": 178,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 221,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 219,
            "argument": {
              "type": "BinaryExpression",
              "start": 195,
              "end": 218,
              "left": {
                "type": "BinaryExpression",
                "start": 195,
                "end": 207,
                "left": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "LogicalExpression",
                  "start": 200,
                  "end": 206,
                  "left": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "start": 205,
                    "end": 206,
                    "value": 0,
                    "raw": "0"
                  }
                }
              },
              "operator": "+",
              "right": {
                "type": "LogicalExpression",
                "start": 211,
                "end": 217,
                "left": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "start": 216,
                  "end": 217,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
