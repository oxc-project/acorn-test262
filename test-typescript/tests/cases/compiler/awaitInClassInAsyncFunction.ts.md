__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 179,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": null,
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 141,
                  "end": 175,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 151,
                      "end": 169,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 154,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": null,
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
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
