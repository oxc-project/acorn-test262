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
        "decorators": [],
        "name": "f",
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
        "start": 19,
        "end": 80,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 78,
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 69,
                        "object": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 56,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 69,
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 70,
                        "end": 75,
                        "id": null,
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 73,
                          "end": 75,
                          "body": []
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
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
