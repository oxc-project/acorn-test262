__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 95,
  "end": 326,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 153,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 105,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 108,
            "end": 152,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 139,
              "end": 151,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 141,
                  "end": 149,
                  "argument": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 149,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 326,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 260,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 263,
            "end": 325,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 268,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 311,
              "end": 323,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 313,
                  "end": 321,
                  "argument": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 321,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
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
