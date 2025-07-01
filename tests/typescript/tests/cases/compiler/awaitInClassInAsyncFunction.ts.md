__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 91,
              "end": 92
            },
            "start": 84,
            "end": 93
          }
        ],
        "start": 78,
        "end": 95
      },
      "expression": false,
      "start": 57,
      "end": 95
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 115
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 154
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 166
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 163,
                          "end": 168
                        },
                        "start": 157,
                        "end": 168
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 151,
                      "end": 169
                    }
                  ],
                  "start": 141,
                  "end": 175
                },
                "abstract": false,
                "declare": false,
                "start": 135,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [],
              "start": 131,
              "end": 175
            },
            "start": 124,
            "end": 176
          }
        ],
        "start": 118,
        "end": 178
      },
      "expression": false,
      "start": 97,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 178
}
```
