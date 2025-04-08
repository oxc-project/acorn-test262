__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 49,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 42,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 42,
                    "name": "isConcatSpreadable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 43,
                  "end": 49,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 49,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
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
