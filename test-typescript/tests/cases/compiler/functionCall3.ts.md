__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 33,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 32,
            "argument": {
              "type": "ArrayExpression",
              "start": 28,
              "end": 31,
              "elements": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 30,
                  "raw": "1",
                  "value": 1
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 20,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 15,
          "end": 20,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 15,
            "end": 18
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 43,
            "end": 48,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
