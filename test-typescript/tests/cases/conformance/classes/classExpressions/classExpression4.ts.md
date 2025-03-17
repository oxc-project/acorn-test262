__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 8,
            "end": 59,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 14,
              "end": 59,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 20,
                  "end": 57,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 23,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 23,
                    "end": 57,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 47,
                              "end": 48,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 69,
            "end": 82,
            "callee": {
              "type": "MemberExpression",
              "start": 69,
              "end": 80,
              "object": {
                "type": "NewExpression",
                "start": 70,
                "end": 75,
                "callee": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 80,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
