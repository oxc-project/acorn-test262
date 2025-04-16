__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 58,
            "name": "obj",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 37,
                      "name": "func1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 39,
                        "end": 56,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 40,
                            "end": 47,
                            "argument": {
                              "type": "Identifier",
                              "start": 43,
                              "end": 47,
                              "name": "rest",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 81,
                  "name": "func",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 81,
                  "end": 94,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 82,
                      "end": 89,
                      "argument": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 89,
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 91,
                    "end": 94,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
