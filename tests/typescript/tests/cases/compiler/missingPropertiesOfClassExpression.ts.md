__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "George",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "start": 21,
        "end": 57,
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 27,
          "end": 57,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 29,
              "end": 55,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "reset",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 34,
                "end": 55,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 37,
                  "end": 55,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 39,
                      "end": 53,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 46,
                        "end": 52,
                        "object": {
                          "type": "ThisExpression",
                          "start": 46,
                          "end": 50
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 52,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 75,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 102,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 102,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 88,
                    "end": 96,
                    "expression": {
                      "type": "CallExpression",
                      "start": 88,
                      "end": 95,
                      "callee": {
                        "type": "Super",
                        "start": 88,
                        "end": 93
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
