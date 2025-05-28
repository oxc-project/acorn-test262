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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 48,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 47,
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 25,
                  "end": 39,
                  "object": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 39,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 40,
                  "end": 45,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 43,
                    "end": 45,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
