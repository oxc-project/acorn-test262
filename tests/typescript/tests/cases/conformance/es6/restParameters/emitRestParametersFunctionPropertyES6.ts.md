__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15,
                      "end": 20
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rest",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 26,
                              "end": 30
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 23,
                            "end": 30
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 35,
                            "end": 39
                          },
                          "start": 32,
                          "end": 39
                        },
                        "start": 22,
                        "end": 39
                      },
                      "start": 20,
                      "end": 39
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 15,
                    "end": 39
                  }
                ],
                "start": 9,
                "end": 41
              },
              "start": 7,
              "end": 41
            },
            "start": 4,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 51
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 65,
                      "end": 72
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 74,
                    "end": 77
                  },
                  "expression": false,
                  "start": 64,
                  "end": 77
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 77
              }
            ],
            "start": 54,
            "end": 79
          },
          "definite": false,
          "start": 47,
          "end": 79
        }
      ],
      "declare": false,
      "start": 43,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
