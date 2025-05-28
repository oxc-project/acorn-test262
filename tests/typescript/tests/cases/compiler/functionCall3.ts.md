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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 48,
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
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
