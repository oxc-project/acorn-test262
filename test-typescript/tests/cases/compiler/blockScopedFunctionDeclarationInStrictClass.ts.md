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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 141,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 141,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 33,
                    "end": 110,
                    "test": {
                      "type": "Literal",
                      "start": 37,
                      "end": 41,
                      "value": true,
                      "raw": "true"
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 43,
                      "end": 110,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 57,
                          "end": 75,
                          "id": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 69,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 72,
                            "end": 75,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 88,
                          "end": 94,
                          "expression": {
                            "type": "CallExpression",
                            "start": 88,
                            "end": 93,
                            "callee": {
                              "type": "Identifier",
                              "start": 88,
                              "end": 91,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 125,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 124,
                      "callee": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
