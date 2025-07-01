__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lengths",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 181
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 185,
                    "end": 188
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 190,
                    "end": 193
                  },
                  {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 195,
                    "end": 198
                  }
                ],
                "start": 184,
                "end": 199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 184,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 210
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 217
                  },
                  "optional": false,
                  "computed": false,
                  "start": 209,
                  "end": 217
                },
                "id": null,
                "generator": false,
                "start": 204,
                "end": 217
              }
            ],
            "optional": false,
            "start": 184,
            "end": 218
          },
          "definite": false,
          "start": 174,
          "end": 218
        }
      ],
      "declare": false,
      "start": 170,
      "end": 219
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 170,
  "end": 219
}
```
