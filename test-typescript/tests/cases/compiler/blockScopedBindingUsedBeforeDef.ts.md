blockScopedBindingUsedBeforeDef.ts
```json
{
  "type": "Program",
  "start": 6,
  "end": 121,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 6,
      "end": 43,
      "await": false,
      "body": {
        "type": "ContinueStatement",
        "start": 34,
        "end": 43,
        "label": null
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 11,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 15,
            "end": 23,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 15,
              "end": 23,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 16,
                  "end": 22,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ]
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 27,
        "end": 32,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 28,
            "end": 31,
            "properties": []
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 51,
      "end": 94,
      "body": {
        "type": "ContinueStatement",
        "start": 85,
        "end": 94,
        "label": null
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 74,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 60,
              "end": 68,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 61,
                  "end": 67,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "ObjectExpression",
              "start": 71,
              "end": 74,
              "properties": []
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "Literal",
        "start": 76,
        "end": 81,
        "raw": "false",
        "value": false
      },
      "update": null
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 120,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 106,
            "end": 114,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 107,
                "end": 113,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 120,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
