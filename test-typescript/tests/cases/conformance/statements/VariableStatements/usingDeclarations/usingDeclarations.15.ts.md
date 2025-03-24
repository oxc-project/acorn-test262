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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "_",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 25,
                  "end": 39,
                  "object": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 39,
                    "name": "dispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 40,
                  "end": 45,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 43,
                    "end": 45,
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
      "kind": "using",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
