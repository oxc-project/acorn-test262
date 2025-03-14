functionToFunctionWithPropError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 43,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 17,
                    "end": 28,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 27,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 21,
                        "end": 27
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 29,
                    "end": 41,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 33,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 75,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 60,
                "end": 75,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 62,
                    "end": 73,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 66,
                        "end": 72
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 83,
      "expression": {
        "type": "AssignmentExpression",
        "start": 77,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 84,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
