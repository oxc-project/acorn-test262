__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "method",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 76,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 74,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 73,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 38,
                  "decorators": [],
                  "name": "dictionary",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 41,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 42,
                    "end": 70,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 44,
                        "end": 68,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 45,
                            "end": 58,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 50,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 52,
                                "end": 58
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 59,
                          "end": 67,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 61,
                            "end": 67
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 71,
                    "end": 73,
                    "properties": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
