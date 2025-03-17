__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 170,
  "end": 220,
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
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 181,
            "name": "lengths",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 184,
            "end": 218,
            "callee": {
              "type": "MemberExpression",
              "start": 184,
              "end": 203,
              "object": {
                "type": "ArrayExpression",
                "start": 184,
                "end": 199,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 185,
                    "end": 188,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 190,
                    "end": 193,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  {
                    "type": "Literal",
                    "start": 195,
                    "end": 198,
                    "value": "c",
                    "raw": "\"c\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 200,
                "end": 203,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 204,
                "end": 217,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 209,
                  "end": 217,
                  "object": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 217,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
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
