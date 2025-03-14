__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 43,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 41,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 19,
                  "end": 33,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 25,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 33,
                    "decorators": [],
                    "name": "species",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 41,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 72,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 55,
        "end": 71,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 61,
          "end": 71,
          "exprName": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "obj",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
