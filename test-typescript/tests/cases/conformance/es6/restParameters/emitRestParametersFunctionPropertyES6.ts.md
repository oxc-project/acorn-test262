emitRestParametersFunctionPropertyES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 96,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 58,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 26,
                "end": 58,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 32,
                    "end": 56,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 37,
                      "decorators": [],
                      "name": "func1",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 39,
                        "end": 56,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 40,
                            "end": 47,
                            "argument": {
                              "type": "Identifier",
                              "start": 43,
                              "end": 47,
                              "decorators": [],
                              "name": "rest",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 56,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 52,
                            "end": 56
                          }
                        }
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "decorators": [],
            "name": "obj2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 71,
            "end": 96,
            "properties": [
              {
                "type": "Property",
                "start": 77,
                "end": 94,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 81,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 81,
                  "end": 94,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 91,
                    "end": 94,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 82,
                      "end": 89,
                      "argument": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 89,
                        "decorators": [],
                        "name": "rest",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
