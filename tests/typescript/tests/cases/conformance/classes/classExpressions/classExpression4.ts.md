__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 8,
            "end": 59,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 14,
              "end": 59,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 20,
                  "end": 57,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 23,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 23,
                    "end": 57,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 26,
                      "end": 57,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 36,
                          "end": 51,
                          "argument": {
                            "type": "NewExpression",
                            "start": 43,
                            "end": 50,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 47,
                              "end": 48,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 69,
            "end": 82,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 69,
              "end": 80,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 70,
                "end": 75,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 80,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
