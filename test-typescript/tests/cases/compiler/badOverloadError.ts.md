__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "method",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 76,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 74,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 73,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 38,
                  "name": "dictionary",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 41,
                  "end": 73,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 71,
                    "end": 73,
                    "properties": []
                  },
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
                            "name": "index",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 50,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 52,
                                "end": 58
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
