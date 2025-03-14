classStaticBlock1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 77,
        "body": [
          {
            "type": "StaticBlock",
            "start": 28,
            "end": 75,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 45,
                "end": 57,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 51,
                    "end": 56,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 55,
                      "end": 56,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "ExpressionStatement",
                "start": 67,
                "end": 69,
                "expression": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
