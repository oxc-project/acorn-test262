__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
        "start": 13,
        "end": 46,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 16,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 20,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 42,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 23,
                      "end": 42,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 25,
                          "end": 40,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 26,
                              "end": 32,
                              "name": "f",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 27,
                                "end": 32,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 29,
                                  "end": 32
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 34,
                            "end": 39,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 36,
                              "end": 39
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
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
