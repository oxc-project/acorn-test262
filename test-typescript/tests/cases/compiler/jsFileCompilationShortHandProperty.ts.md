__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 96,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 96,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 31,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 29,
                  "end": 31,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 53,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 52,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 45,
                  "end": 52,
                  "raw": "\"Hello\"",
                  "value": "Hello",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 94,
            "argument": {
              "type": "ObjectExpression",
              "start": 65,
              "end": 93,
              "properties": [
                {
                  "type": "Property",
                  "start": 75,
                  "end": 76,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 86,
                  "end": 87,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
