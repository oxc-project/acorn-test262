optionalChainingInParameterInitializer.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 108,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 99,
              "end": 108,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 70,
                    "end": 83,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 81,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 81,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 133,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 132,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 129,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 127,
            "end": 129,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 112,
              "end": 122,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ChainExpression",
                "start": 116,
                "end": 122,
                "expression": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 122,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 116,
                    "end": 119,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
