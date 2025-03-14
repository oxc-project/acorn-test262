classExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
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
            "type": "ClassExpression",
            "start": 8,
            "end": 19,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 19,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 29,
            "end": 58,
            "properties": [
              {
                "type": "Property",
                "start": 35,
                "end": 56,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 38,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ClassExpression",
                  "start": 40,
                  "end": 56,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 49,
                    "end": 56,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 48,
                    "decorators": [],
                    "name": "C2",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 101,
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 75,
            "end": 99,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 79,
                "end": 99,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 83,
                  "end": 99,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 92,
                    "end": 99,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 91,
                    "decorators": [],
                    "name": "C4",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
