__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 141,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 33,
                    "end": 110,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 43,
                      "end": 110,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 57,
                          "end": 75,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 72,
                            "end": 75,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 69,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 88,
                          "end": 94,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 88,
                            "end": 93,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 88,
                              "end": 91,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Literal",
                      "start": 37,
                      "end": 41,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 125,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 124,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
