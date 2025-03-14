elaborationForPossiblyCallableTypeStillReferencesArgumentAtTopLevel.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 34,
            "decorators": [],
            "name": "ohno",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 34,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 18,
                "end": 34,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 73,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "ff",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 65,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 72,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 74,
        "end": 82,
        "arguments": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "ohno",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 74,
          "end": 76,
          "decorators": [],
          "name": "ff",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
