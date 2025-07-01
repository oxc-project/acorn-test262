__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19,
                      "end": 20
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 28,
                            "end": 32
                          },
                          "start": 25,
                          "end": 32
                        },
                        "start": 22,
                        "end": 32
                      },
                      "start": 20,
                      "end": 32
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 19,
                    "end": 32
                  }
                ],
                "start": 17,
                "end": 34
              },
              "start": 15,
              "end": 34
            },
            "start": 14,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 34
        }
      ],
      "declare": true,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 64,
                            "end": 68
                          },
                          "start": 61,
                          "end": 68
                        },
                        "start": 58,
                        "end": 68
                      },
                      "start": 56,
                      "end": 68
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 54,
                    "end": 68
                  }
                ],
                "start": 52,
                "end": 70
              },
              "start": 50,
              "end": 70
            },
            "start": 49,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 70
        }
      ],
      "declare": true,
      "start": 35,
      "end": 70
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "start": 84,
                "end": 88
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "start": 90,
                "end": 94
              }
            ],
            "start": 82,
            "end": 96
          },
          "definite": false,
          "start": 78,
          "end": 96
        }
      ],
      "declare": false,
      "start": 72,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
