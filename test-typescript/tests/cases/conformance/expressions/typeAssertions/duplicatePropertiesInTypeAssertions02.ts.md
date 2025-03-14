__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 8,
            "end": 36,
            "expression": {
              "type": "ObjectExpression",
              "start": 8,
              "end": 10,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 14,
              "end": 36,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 15,
                  "end": 25,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 16,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 16,
                    "end": 24,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 18,
                      "end": 24
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 26,
                  "end": 35,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
