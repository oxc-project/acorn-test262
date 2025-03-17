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
      "async": true,
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
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 178,
      "async": true,
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
              "arguments": [],
              "callee": {
                "type": "ClassExpression",
                "start": 135,
                "end": 175,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 141,
                  "end": 175,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 151,
                      "end": 169,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 154,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": null,
                      "value": {
                        "type": "AwaitExpression",
                        "start": 157,
                        "end": 168,
                        "argument": {
                          "type": "CallExpression",
                          "start": 163,
                          "end": 168,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 166,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
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
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
