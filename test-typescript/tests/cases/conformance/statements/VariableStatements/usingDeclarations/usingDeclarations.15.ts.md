__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 22,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 24,
                "end": 45,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 25,
                  "end": 39,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 39,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 40,
                  "end": 45,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 43,
                    "end": 45,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "using"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
