typePredicateOnVariableDeclaration01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 7,
                "end": 21,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 7,
                  "end": 11
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 15,
                  "end": 21,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 15,
                    "end": 21
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
