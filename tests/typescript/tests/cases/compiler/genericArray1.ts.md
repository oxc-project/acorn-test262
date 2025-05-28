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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 218,
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
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 204,
                "end": 217,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                "body": {
                  "type": "MemberExpression",
                  "start": 209,
                  "end": 217,
                  "object": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 217,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
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
