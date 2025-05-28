__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 156,
  "end": 207,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 207,
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
        "end": 207,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 205,
            "argument": {
              "type": "BinaryExpression",
              "start": 195,
              "end": 204,
              "left": {
                "type": "BinaryExpression",
                "start": 195,
                "end": 200,
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
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
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
