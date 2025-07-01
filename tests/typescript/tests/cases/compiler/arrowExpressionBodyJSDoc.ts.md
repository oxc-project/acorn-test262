__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 105
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 113
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 149
                  },
                  "start": 141,
                  "end": 149
                }
              ],
              "start": 139,
              "end": 151
            },
            "id": null,
            "generator": false,
            "start": 108,
            "end": 152
          },
          "definite": false,
          "start": 101,
          "end": 152
        }
      ],
      "declare": false,
      "start": 95,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 260
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 268
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 321
                  },
                  "start": 313,
                  "end": 321
                }
              ],
              "start": 311,
              "end": 323
            },
            "id": null,
            "generator": false,
            "start": 263,
            "end": 325
          },
          "definite": false,
          "start": 256,
          "end": 325
        }
      ],
      "declare": false,
      "start": 250,
      "end": 326
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 326
}
```
