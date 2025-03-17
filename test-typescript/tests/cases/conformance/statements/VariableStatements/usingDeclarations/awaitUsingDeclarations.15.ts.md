__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "f",
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
        "start": 19,
        "end": 80,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 78,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 41,
                  "end": 77,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 43,
                      "end": 75,
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 69,
                        "object": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 56,
                          "name": "Symbol",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 69,
                          "name": "asyncDispose",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 70,
                        "end": 75,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 73,
                          "end": 75,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
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
