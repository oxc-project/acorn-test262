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
      "async": true,
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
                "definite": false,
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
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 69,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 56,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 69,
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 70,
                        "end": 75,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 73,
                          "end": 75,
                          "body": []
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
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "f",
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
