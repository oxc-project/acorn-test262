__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 170,
  "end": 219,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 181,
            "decorators": [],
            "name": "lengths",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 184,
            "end": 218,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 204,
                "end": 217,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 209,
                  "end": 217,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 217,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 184,
              "end": 203,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 184,
                "end": 199,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 185,
                    "end": 188,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 190,
                    "end": 193,
                    "raw": "\"b\"",
                    "value": "b"
                  },
                  {
                    "type": "Literal",
                    "start": 195,
                    "end": 198,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 200,
                "end": 203,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
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
