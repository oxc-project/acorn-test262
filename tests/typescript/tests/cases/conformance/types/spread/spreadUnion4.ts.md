__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 34,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 34,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 19,
                    "end": 32,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 20,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 22,
                        "end": 32,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 25,
                          "end": 32,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 28,
                            "end": 32
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 70,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 70,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 52,
                "end": 70,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 54,
                    "end": 68,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 58,
                        "end": 68,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 61,
                          "end": 68,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 64,
                            "end": 68
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 97,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 82,
            "end": 96,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 84,
                "end": 88,
                "argument": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 90,
                "end": 94,
                "argument": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
