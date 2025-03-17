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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 43,
            "end": 48,
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
