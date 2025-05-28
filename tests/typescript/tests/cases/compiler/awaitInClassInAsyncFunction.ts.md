__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 178,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 95,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 84,
            "end": 93,
            "argument": {
              "type": "Literal",
              "start": 91,
              "end": 92,
              "value": 2,
              "raw": "2"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 178,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 176,
            "argument": {
              "type": "NewExpression",
              "start": 131,
              "end": 175,
              "callee": {
                "type": "ClassExpression",
                "start": 135,
                "end": 175,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 141,
                  "end": 175,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 151,
                      "end": 169,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 154,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "AwaitExpression",
                        "start": 157,
                        "end": 168,
                        "argument": {
                          "type": "CallExpression",
                          "start": 163,
                          "end": 168,
                          "callee": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 166,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
