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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 141,
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
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 72,
                            "end": 75,
                            "body": []
                          },
                          "expression": false
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
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
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
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
